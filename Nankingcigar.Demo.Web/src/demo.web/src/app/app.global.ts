/*
 * @Author: Chao Yang
 * @Date: 2017-09-04 09:18:32
 * @Last Modified by: Chao Yang
 * @Last Modified time: 2017-09-15 06:13:21
 */
app.environment = {
  classPrefix: 'nankingcigar-demo-',
  titlePrefix: '{{ system }} | ',
  defaultTitle: '{{ system }}',
  sessionKey: 'nankingcigar-demo-session',
  languageKey: 'nankingcigar-demo-language'
};

export const api = {
  account: {
    authenicate: 'api/account',
    register: 'api/services/app/account',
    logOut: 'api/account'
  },
  user: {
    getCurrentUser: 'api/services/app/user'
  }
};

export const languages = [
  {
    label: 'English',
    value: 'en'
  },
  {
    label: '简体中文',
    value: 'cn'
  }
];

export const languageKeys = {
  system: 'System',
  author: 'Author',
  page: {
    login: {
      title: 'System',
      subTitle: 'Please login into your account.',
      userNameIsRequired: 'User Name is required.',
      userName: 'User Name',
      passwordIsRequired: 'Password is required.',
      password: 'Password',
      login: 'Log In',
      forgotPassword: 'Forgot Password?',
      doNotHaveAnAccount: 'Do not have an account?',
      createAnAccount: 'Create an account',
      yearSystemByAuthor: '{{ year }} © {{ system }} by {{ author }}.'
    },
    register: {
      title: 'System',
      subTitle: 'Create a {{ system }}\'s account',
      userNameIsRequired: 'User Name is required.',
      userName: 'User Name',
      emailIsRequired: 'Email is required.',
      email: 'Email',
      passwordIsRequired: 'Password is required.',
      password: 'Password',
      submit: 'Submit',
      alreadyHaveAnAccount: 'Already have an account?',
      login: 'Log In',
      yearSystemByAuthor: '{{ year }} © {{ system }} by {{ author }}.',
      agreeTheTermsAndPolicyPart1: 'Agree the',
      agreeTheTermsAndPolicyPart2: ' terms and policy',
    },
    home: {
      title: 'System',
      logOut: 'Log out',
      job: 'Code Farmer',
      dashboard: 'Dashboard',
      profile: 'Profile',
      users: 'Users',
      logs: 'Logs',
      mailbox: 'Mail Box',
      about: 'About',
      yearSystemByAuthor: '{{ year }} © {{ system }} by {{ author }}.',
      layout: {
        fixedHeader: 'Fixed Header',
        fixedSidebar: 'Fixed Sidebar',
        horizontalBar: 'Horizontal bar',
        toggleSidebar: 'Toggle Sidebar',
        compactMenu: 'Compact Menu',
        hoverMenu: 'Hover Menu',
        boxedLayout: 'Boxed Layout',
        resetOptions: 'Reset Options'
      }
    },
    dashboard: {
      home: 'Home',
      dashboard: 'Dashboard'
    }
  },
  errors: {
    global: {
    },
    '/login': {
      '1': 'User Name or Password is incorrect.'
    },
    '/register': {
      '1': 'User Name or Email has been registered.'
    }
  }
};
