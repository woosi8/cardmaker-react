# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Firebase 실시간 Database Sync

-login.jsx
메이커 컴포넌트에서 사용자의 카드가 업데이트 될떄마다 cardRepository를 이용할건데 이때 사용자의 아이디를 이용해서 카드들이 사용자 id별로 저장되도록 만들어야한다
사용자 id는 login할때 history에서 함께 전달하게 된다
메이커에서 이 값을 state로 저장한다. userId

- maker.jsx ( // 데이터 보존하기 위한 state)

1. 컴포넌트가 마운트가 되면 cardRepository의 syncCards가 먼저 호출이 됩니다

2. syncCards의 함수가 수행됩니다 (ref.on이 실행되겠죠?)
   그리고 함수 수행이 완료되고 마지막으로는 arrow 함수가 리턴이 되어요 (아직 수행되지 않음)

3. 리턴된 arrow 함수의 오브젝트가 stopSync에 할당이 되어지고

4. 여기 useEffect에서 리턴되는 stopSync를 수행하게될 arrow 함수는 나중에 컴포넌트가 언마운트되면 수행이 될거예요 :) (그전까지는 stopSync()는 호출되지 않음, 그러므로 startSync에서 리턴되었던 함수도 수행이 되지 않음)
   !!useEffect return에서는 항상 function을 리턴해 주어야 한답니다.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
