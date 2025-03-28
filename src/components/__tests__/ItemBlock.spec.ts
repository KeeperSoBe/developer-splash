import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ItemBlock from '../ItemBlock.vue'

describe('Component: ItemBlock', () => {
  it('renders properly', () => {
    const mockTitle = 'mock-title'
    const mockSubtitle = 'mock-subtitle'

    const wrapper = mount(ItemBlock, { props: { title: mockTitle, subtitle: mockSubtitle } })
    expect(wrapper.text()).toContain(mockTitle)
    expect(wrapper.text()).toContain(mockSubtitle)
  })
})
