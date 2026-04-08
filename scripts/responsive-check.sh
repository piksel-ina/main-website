#!/usr/bin/env bash
set -euo pipefail

BREAKPOINTS=(1920 1280 1024 820 600 360)
HEIGHT=900
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
SCREENSHOT_DIR="${SCRIPT_DIR}/screenshots"
COMPRESS=true

usage() {
  echo "Usage: $(basename "$0") [options] [url]"
  echo ""
  echo "Options:"
  echo "  --page <path>     Specific page path (e.g. /docs, /docs/intro)"
  echo "  --no-compress     Skip JPEG compression, keep raw PNGs"
  echo "  --help            Show this help"
  echo ""
  echo "Examples:"
  echo "  $(basename "$0")                            # screenshot homepage at all breakpoints"
  echo "  $(basename "$0") --page /docs               # screenshot /docs at all breakpoints"
  echo "  $(basename "$0") http://localhost:4000       # use custom base URL"
  echo "  $(basename "$0") --no-compress --page /docs"
}

PAGE_PATH=""
BASE_URL="http://localhost:3000"

while [[ $# -gt 0 ]]; do
  case "$1" in
    --page)
      PAGE_PATH="$2"
      shift 2
      ;;
    --no-compress)
      COMPRESS=false
      shift
      ;;
    --help|-h)
      usage
      exit 0
      ;;
    http*)
      BASE_URL="$1"
      shift
      ;;
    *)
      echo "Unknown argument: $1" >&2
      usage >&2
      exit 1
      ;;
  esac
done

URL="${BASE_URL}${PAGE_PATH}"

slug() {
  local path="${1#/}"
  if [[ -z "$path" ]]; then
    echo "homepage"
  else
    echo "$path" | tr '/' '-'
  fi
}

PAGE_SLUG=$(slug "$PAGE_PATH")

mkdir -p "$SCREENSHOT_DIR"

echo "Opening ${URL}..."
playwright-cli open "$URL" --browser chromium > /dev/null

sleep 2

for width in "${BREAKPOINTS[@]}"; do
  PNG_FILE="${SCREENSHOT_DIR}/${PAGE_SLUG}-${width}.png"
  echo "  ${width}px -> ${PNG_FILE}"
  playwright-cli resize "$width" "$HEIGHT" > /dev/null
  sleep 1
  playwright-cli screenshot --filename "$PNG_FILE" > /dev/null
done

playwright-cli close > /dev/null

if [[ "$COMPRESS" == true && -x "$(command -v convert)" ]]; then
  echo "Compressing to JPEG (quality 85)..."
  for png in "${SCREENSHOT_DIR}/${PAGE_SLUG}"-*.png; do
    [[ -f "$png" ]] || continue
    jpg="${png%.png}.jpg"
    convert "$png" -quality 85 "$jpg" && rm "$png"
  done
  echo "Done. Screenshots saved to ${SCREENSHOT_DIR}/ (${PAGE_SLUG}-*.jpg)"
else
  echo "Done. Screenshots saved to ${SCREENSHOT_DIR}/ (${PAGE_SLUG}-*.png)"
fi
