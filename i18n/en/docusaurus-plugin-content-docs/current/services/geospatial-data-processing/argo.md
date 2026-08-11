---
sidebar_position: 2
---
import Figure from '@site/src/components/Docs/Figure';

# Argo Workflow

Argo Workflows is an open-source workflow engine for Kubernetes. It coordinates parallel computing jobs across a range of workloads, including machine learning and data processing. At Piksel, it is used as part of the geospatial processing platform. Argo Workflows is a graduated project of the Cloud Native Computing Foundation (CNCF).

Each stage of a process can run the same container image on different nodes, keeping the execution environment consistent. A workflow can also define the requirements for each task, including the number of parallel pods, RAM, vCPUs, and node group. Resource-use data from processing runs can support cost estimates and help monitor the computing budget.

For Piksel, this provides a repeatable way to run complex geospatial processing as an automated workflow. A workflow can be run again with the same configuration, allowing an established method or script to be used for a new processing run without rebuilding the process.

## Workflow

An Argo workflow is a set of connected tasks. Each task handles one part of the work. The links between tasks determine whether they run in sequence or in parallel, and can be modelled as a directed acyclic graph (DAG).

This example from Piksel shows a job split into grids for parallel processing, creating a fan-out. Within each grid, imagery is processed and analysed before the results are stored. Results from every grid then converge in a single Open Data Cube indexing step, creating a fan-in.

<Figure
  src="/img/services/geospatial-data-processing/argo-workflow-en.svg"
  alt="Argo Workflow showing grid-based parallel processing"
  caption="Example of parallel processing with Argo Workflows"
  captionAlign="center"
  size={6}
/>

Processing begins by defining the processing grid. It breaks a large area of work into smaller units, each of which can be handled as an individual task.

Argo then distributes work to each grid. Grid 1, Grid 2, and Grid n represent a workflow that can handle many grid cells; a Geomad processing run may include around 3,000 grids.

The number of tasks running in parallel can be limited to match the available resources. With a limit of 50 tasks, Argo runs 50 grids at once. When one task finishes, such as Grid 1, Argo automatically schedules the next grid, such as Grid 51, without manual intervention.

Each grid processes imagery, runs its analysis, and stores the results independently. Once processing is complete across the grids, the results feed into a single Open Data Cube indexing stage, forming the fan-in.

## Argo Workflows Interface

Once a workflow is running, the Argo Workflows interface shows its tasks and their execution status in one view. Authorised users can use it to follow the progress of each processing stage.

<Figure
  src="/img/services/geospatial-data-processing/1-cloud-argo.webp"
  alt="Argo Workflows interface"
  caption="Argo Workflows interface for parallel processing"
  captionAlign="center"
  size={4}
/>

## Access and Workflow Preparation

Argo Workflows is available only to users with specific access and authorisation in the Piksel environment. Running a workflow requires an understanding of containerisation and preparation of the workflow manifest, container image, processing parameters, input and output locations, and resource requirements.

This preparation is carried out in consultation with the Piksel team so that the workflow configuration aligns with the Piksel Kubernetes cluster. The [Training Programme](../../support/training) supports users who need to develop the relevant technical skills. [Strategic Collaboration](../../support/collaboration) is for prospective partners exploring joint geospatial processing, analysis, or method development with Piksel.

---