import { mount, shallowMount } from '@vue/test-utils'
import AWPButton from '@/components/AWPButton.vue'

var testTitle = "This is a test title"
const wrapper = shallowMount(AWPButton, {
  props: { text: testTitle }
})

describe('AWPButton', () => {
  it('display title correctly', () => {
    expect(wrapper.text()).toEqual(testTitle)
  })
})

describe('AWPButton', () => {
  it('does not have a test class', () => {
    expect(wrapper.find('.test').exists()).toBeFalsy()
  })
})
