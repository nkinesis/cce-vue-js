import { mount, shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

var testTitle = "Hello"
const wrapper = shallowMount(HelloWorld, {
  props: { msg: testTitle }
})

describe('HelloWorld', () => {
  it('display title correctly', () => {
    expect(wrapper.find('h1').text()).toEqual(testTitle)
  })
})