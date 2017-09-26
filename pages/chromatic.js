// import Frame from '../components/frame';
// import Modal from '../components/modal';

// Note that how you check if code is running in development may differ in your app
if (process.env.NODE_ENV === 'development' && typeof window !== 'undefined') {
  const chromatic = require('react-chromatic').default;

  chromatic({
    appCode: '7frwly4rewv',
    // components: [Frame, Modal]
    // Alternatively, if your app is built with webpack, you can create a require context:
    componentContext: [
      // This will find all files in the components directory or subdirectories of it
      require.context('../components', true, /\/[^.]*\.js/),
      require.context('.', true, /\/[^.]*\.js/)
    ]
  });
}
