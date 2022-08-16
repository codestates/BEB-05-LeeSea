# Getting Started with React App



## How to setup

1. 먼저 환경변수를 설정해준다.

    `client` 폴더 하위에 `.env` 파일을 생성하고 아래 코드를 입력한다. `REACT_APP_NFT_STORAGE_API_KEY`에는 NFT STORAGE에서 발급한 API 키를 넣어준다.

    ```
    SKIP_PREFLIGHT_CHECK=true
    REACT_APP_SKIP_PREFLIGHT_CHECK=true
    REACT_APP_USE_GANACHE=false
    REACT_APP_NFT_STORAGE_API_KEY=NFT STORAGE API 키
    REACT_APP_CONTRACT_ADDR=0x2e03ef77518f0ddeb042ab3de778a64737a983ea
    ```

2. npm install 명령어를 통해 모듈을 설치한다.

    ```bash
    npm install
    ```

3. 프로젝트를 실행한다.

    ```bash
    npm start
    ```

4. Chorme 브라우저를 통해 페이지에 접속한다.