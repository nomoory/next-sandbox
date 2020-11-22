1. 개발
local environment test
$ npm run dev

2. 배포방법
1) nextjs가 동적인 서버를 띄우므로 static한 html을 뽑기위해 아래의 명령어를 입력합니다.
yarn run build
yarn run export

2) firebase에 호스팅하기 위해 아래의 명령어를 입력합니다.
* firebase를 설치한 후 권한이 있는 아이디로 로그인해야합니다.

[Staging-Deploy]

$ firebase deploy --only hosting:staging

Project Console: https://console.firebase.google.com/project/noom-kr-refund-survey/overview
Hosting URL: https://noom-kr-refund-survey-staging.firebaseapp.com

[Production-Deploy]

$ firebase deploy --only hosting:production 

Project Console: https://console.firebase.google.com/project/noom-kr-refund-survey/overview
Hosting URL: https://noom-kr-refund-survey.firebaseapp.com


