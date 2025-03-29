import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import TitleBlock from '../TitleBlock.vue';

describe('Component: TitleBlock', () => {
  it('renders properly', () => {
    const wrapper = mount(TitleBlock);
    expect(wrapper.text()).toContain('James Gardiner');
  });
});
