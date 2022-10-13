# 항해99 4주차 리덕스 개인과제

### Vercel 배포 시 오류사항
1. Failed to compile. module not found: error: can't resolve 'react-router-dom' in '/vercel/path0/src/shared'
2. Failed to compile. Module not found: Error: Can't resolve 'styled-components' in '/vercel/path0/src/pages'

해결 방법<br>
에러 뜻 그대로 yarn add react-router-dom 및 yanr add styled-components 설치했고, package.json에 설치된 것을 확인 후
github에 추가하여 vercel에 자동으로 재배포 되어 흰 화면에서 제대로 화면이 구현 됐다.
