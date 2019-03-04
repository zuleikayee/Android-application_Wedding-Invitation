var app = new Framework7({
  // App root element
  root: '#app',
  // App Name
  name: 'My App',
  // App id
  id: 'com.example.cleanblank',
  // Enable swipe panel
  panel: {
    swipe: 'left',
  },
  // Add default routes
  routes: [
    {
      path: '/entourage/',
      url: 'entourage.html',
    },
    {
      path: '/program/',
      url: 'program.html',
    },
    {
      path: '/motif/',
      url: 'motif.html',
    },
    {
      path: '/menu/',
      url: 'menu.html',
    },
    {
      path: '/location/',
      url: 'location.html',
    },
    {
      path: '/aboutus/',
      url: 'aboutus.html',
    },
    {
      path: '/fb/',
      url: 'www.facebook.com/zuleikayeee',
    },
    {
      path: '/twt/',
      url: 'www.twitter.com/zuleikayeee',
    },
    {
      path: '/insta/',
      url: 'www.instagram.com.zuleikayee',
    },
    {
      path: '/git/',
      url: 'www.github.com/zuleikayee',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main');

var app = new Framework7();

var $$ = Dom7;

// Dom Events
$$('.panel-left').on('panel:open', function () {
  console.log('Panel left: open');
});
$$('.panel-left').on('panel:opened', function () {
  console.log('Panel left: opened');
});

// Instance Events
var panelRight = app.panel.right;
panelRight.on('open', function () {
  console.log('Panel right: open');
});
panelRight.on('opened', function () {
  console.log('Panel right: opened');
});

// App Events
app.on('panelClose', function (panel) {
  console.log('Panel ' + panel.side + ': close');
});
app.on('panelClosed', function (panel) {
  console.log('Panel ' + panel.side + ': closed');
});
