import ajax from '@jyb/lib-ajax';

const hostEnv = {
  local: '/proxy',
  test: `${(window.interface_env || 'https://swebsit.jyblife.com')}`,
  production: `${(window.interface_env || 'https://sweb.jyblife.com')}`
};

const currentHost = hostEnv[process.env.NODE_ENV];

function request(url, data, success, error) {
  ajax({
    url: `${currentHost}?ts=${Date.now()}`,
    data: JSON.stringify(data),
    type: 'post',
    dataType: 'json',
    timeout: 60000
  }, json => {
    success && success(json);
  }, code => {
    error && error();
  });
};

export function getLevelAddress(data, cb) {
  request('/prd/free', {
    cmd: '41060212',  
    ...data
  }, data => {
    cb && cb(data);
  }, error => {
    console.log(error);
  })
}


