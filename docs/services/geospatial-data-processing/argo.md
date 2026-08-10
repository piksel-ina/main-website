---
sidebar_position: 2
---
import Figure from '@site/src/components/Docs/Figure';

# Argo Workflow

Argo Workflows adalah *workflow engine* *open source* untuk Kubernetes yang membantu mengatur pekerjaan komputasi paralel. Argo digunakan untuk berbagai beban kerja, seperti *machine learning* dan pemrosesan data; pengolahan data geospasial di Piksel merupakan salah satu penerapannya. Proyek ini berstatus *graduated* di Cloud Native Computing Foundation (CNCF).

Selain mendukung proses komputasi paralel, Argo memungkinkan setiap tahap pengolahan dijalankan menggunakan *container image* yang sama pada node berbeda, dengan lingkungan eksekusi yang konsisten. Integrasi tersebut memudahkan penetapan kebutuhan setiap *task*, seperti jumlah *pod* paralel, RAM, vCPU, dan *node group*. Data penggunaan sumber daya pada setiap proses pengolahan dapat menjadi dasar estimasi biaya dan pemantauan anggaran komputasi.

Dengan demikian, Argo memberi Piksel cara yang terstandar untuk mengoperasikan pengolahan geospasial yang kompleks sebagai workflow otomatis. Workflow tersebut dapat dijalankan ulang dengan konfigurasi yang sama, sehingga metode atau skrip yang digunakan lima tahun sebelumnya dapat diterapkan kembali pada pengolahan tahun ini.

## Alur Kerja

Di Argo, workflow adalah rangkaian task yang saling terhubung. Setiap task menjalankan satu bagian pekerjaan. Hubungan antartask menentukan apakah task berjalan berurutan atau paralel, dan dapat dimodelkan sebagai directed acyclic graph (DAG).

Diagram berikut menunjukkan salah satu contoh workflow pengolahan data di Piksel. Satu pekerjaan dibagi ke beberapa grid agar pengolahan dapat berjalan secara paralel, membentuk pola fan-out. Pada setiap grid, citra diolah, dianalisis, dan hasilnya disimpan. Hasil dari seluruh grid kemudian mengalir ke satu tahap pengindeksan di Open Data Cube (fan-in).

<Figure
  src="/img/services/geospatial-data-processing/argo-workflow.svg"
  alt="Argo Workflow"
  caption="Contoh alur pemrosesan paralel dengan Argo Workflow"
  captionAlign="center"
  size={6}
/>

Pengolahan dimulai dengan penyusunan grid pemrosesan. Grid membagi cakupan pekerjaan yang luas menjadi bagian-bagian yang lebih kecil, sehingga setiap bagian dapat dikerjakan sebagai task tersendiri.

Setelah grid ditentukan, Argo membagikan pekerjaan ke setiap grid. Grid 1, Grid 2, hingga Grid n menunjukkan bahwa satu workflow dapat menangani banyak grid; pada pemrosesan Geomad, jumlahnya dapat mencapai sekitar 3.000 grid.

Jumlah task yang berjalan secara paralel dapat ditetapkan sesuai sumber daya yang tersedia. Misalnya, jika batasnya 50 task, Argo menjalankan 50 grid pada waktu yang sama. Ketika salah satu task selesai, misalnya Grid 1, Argo secara otomatis menjadwalkan grid berikutnya, seperti Grid 51, tanpa menunggu tindakan manusia.

Pada setiap grid, citra diolah, dianalisis, lalu hasilnya disimpan secara mandiri. Setelah proses pada setiap grid selesai, hasilnya mengalir ke satu tahap pengindeksan di Open Data Cube (fan-in).

## Antarmuka Argo Workflow

Setelah workflow dijalankan, antarmuka Argo Workflow menampilkan task dan status pelaksanaannya dalam satu tampilan. Pengguna yang memiliki akses dapat menggunakan tampilan ini untuk mengikuti perkembangan setiap tahap pengolahan.

<Figure
  src="/img/services/geospatial-data-processing/1-cloud-argo.webp"
  alt="Argo Workflow"
  caption="Antarmuka Argo Workflow untuk pemrosesan paralel"
  captionAlign="center"
  size={4}
/>

## Akses dan Persiapan Workflow

Argo Workflow hanya dapat digunakan oleh pengguna yang memiliki akses dan otorisasi khusus di lingkungan Piksel. Sebelum menjalankan workflow, pengguna perlu memahami *containerisation* dan menyiapkan manifest workflow, *container image*, parameter pemrosesan, lokasi data masukan dan keluaran, serta kebutuhan sumber daya.

Persiapan tersebut dilakukan melalui konsultasi dengan Tim Piksel agar konfigurasi workflow selaras dengan konfigurasi cluster Kubernetes. Layanan [Pelatihan](../../support/training) mendukung pengguna yang perlu mengembangkan kemampuan teknis yang diperlukan. Sementara itu, [Kolaborasi](../../support/collaboration) ditujukan bagi calon mitra yang ingin menjajaki kerja bersama dengan Piksel dalam pengolahan, analisis, atau pengembangan metode geospasial.

---
