import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import ItemBlock from '../ItemBlock.vue';

describe('Component: ItemBlock', () => {
  it('renders properly', () => {
    const mockTitle = 'mock-title';
    const mockSubtitle = 'mock-subtitle';
    const mockLink = 'mock-link';

    const wrapper = mount(ItemBlock, {
      props: {
        title: mockTitle,
        subtitle: mockSubtitle,
        link: mockLink,
        show: false,
      },
    });

    expect(wrapper.text()).toContain(mockTitle);
    expect(wrapper.text()).toContain(mockSubtitle);
  });
});
