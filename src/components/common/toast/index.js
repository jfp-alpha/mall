import Toast from './Toast'

const obj = {}

obj.install = function (Vue) {
  const toastconstruct = Vue.extend(Toast)
  const toast = new toastconstruct
  toast.$mount(document.createElement('div'))
  document.body.appendChild(toast.$el)

  Vue.prototype.$toast = toast
}

export default obj 