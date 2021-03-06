# This workflow will do a clean installation of node dependencies, cache/restore them, build the source code and run tests across different versions of node

name: Node.js CI-CD

# Controls when the action will run.
on:
  # Triggers the workflow on push or pull request events but only for the master branch
  push:
    branches: [master]
  pull_request:
    branches: [master]
  # # Allows you to run this workflow manually from the Actions tab
  # workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains multiple jobs
  build_test:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2

      - name: setup node
        uses: actions/setup-node@master
        with:
          node-version: ${{ matrix.node-version }}

      # install applicaion dependencies
      - name: Install dependencies
        run: |
          npm cache --force clean && npm install --force node-sass

      # build and test the apps
      - name: build
        run: |
          npm run build

  push_to_Docker_Hub:
    # The type of runner that the job will run on
    runs-on: ubuntu-latest
    # build docker image and push to docker hub
    # only if the app build and test successfully
    needs: [build_test]

    steps:
      - name: checkout repo
        uses: actions/checkout@v2

      - name: Set up QEMU
        uses: docker/setup-qemu-action@v1

      - name: Login to DockerHub
        uses: docker/login-action@v1
        with:
          username: ${{ secrets.REACTUSERNAME }}
          password: ${{ secrets.DOCKERHUB_TOKEN }}

      - name: Build and push
        uses: docker/build-push-action@v2
        with:
          file: ./Dockerfile
          push: true
          tags: ${{ secrets.REACTUSERNAME }}/myportfolio:latest

      - name: Build and push Docker images
         uses: docker/build-push-action@v3.0.0

      - name: Run the image in a container
        uses: addnab/docker-run-action@v3
        with:
          image: ${{ secrets.REACTUSERNAME }}/myportfolio:latest
          run: |
            echo "runing the docker image"

  push_to_vercel:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2

      - uses: amondnet/vercel-action@v20
        if: github.event_name == 'push' && github.ref == 'refs/heads/master'
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.VERCEL_ORG_ID}}
          vercel-project-id: ${{ secrets.VERCEL_PROJECT_ID}}
          vercel-args: "--prod"
