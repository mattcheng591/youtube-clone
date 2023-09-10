# YouTube Clone
This application is a clone of YouTube that allows for users to login and upload videos. These videos can then be watched by anyone on the website.

## Demo Link
https://yt-web-client-vk6p5gu5jq-uc.a.run.app/

## Description
Google Cloud Storage is used to store the raw and processed videos uploaded by users. Then, Google Cloud Pub/Sub sends messages from the Cloud Storage bucket to Cloud Run. Cloud Run will host a non-public video processing service and transcode the video, to then be uploaded to Cloud Storage.
Cloud Firestore is used to store the metadata from the videos, which allows for Firebase Functions to fetch videos from it and return them. The YouTube web client is created with Next.js, which is hosted on Cloud Run. Docker is used to containerize the application and all the dependencies,
which are pushed to Google Artifact Registry. This Docker image is then deployed to Cloud Run.

### Tech Stack
* TypeScript
* Next.js
* Express.js
* Docker
* FFmpeg
* Firebase Auth
* Firebase Functions
* Firebase Firestore
* Google Cloud Storage
* Google Cloud Pub/Sub
* Google Cloud Run

### Limitations and Future Adjustments
Currently, the Pub/Sub maximum ack deadline is set to 600 seconds, but the max request processing time for Cloud Run is 3600 seconds. This means that it is possible that the video can be processed, but the message may be stuck in the Pub/Sub queue forever.
In the future, we can use the Pull Subscription method instead of the Push Subscription method. This allows for us to decide when to pull messages from the Pub/Sub queue.
More features can be added to this application such as video titles, custom thumbnails, comment section, and more. There are still many features that are missing that would make it more similar to the actual YouTube application.

![Application Summary](https://imagedelivery.net/CLfkmk9Wzy8_9HRyug4EVA/2d33be5f-6a51-4475-6975-7350d9d3d700/public "Application Summary")
