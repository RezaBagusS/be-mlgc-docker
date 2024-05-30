# Belajar Penerapan Machine Learning dengan Google Cloud

Branch ini digunakan untuk modul Studi Kasus: Membangun Aplikasi Machine Learning Dengan Google Cloud.

- git --version
- git clone -b sertaMulia-lab https://github.com/dicodingacademy/a658-machine-learning-googlecloud.git .
- node -v
- sudo apt update
- sudo apt install nodejs
- sudo apt install npm
- npm install
- nvm install
- curl -o- https://raw.github.usercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
- nvm --version
- nvm install --lts
- nvm use --lts
- sudo apt-get update
- sudo apt-get install apt-transport-https ca-certificates gnupg curl
- curl https://packages.cloud.google.com/apt/doc/apt-key/gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google/gpg
- echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
- sudo apt-get update && sudo apt-get install google-cloud-cli
- gcloud --version
- gcloud init --no-launch-browser
- gcloud auth application-default login --no-launch-browser
- gcloud run deploy --source . --port 3000