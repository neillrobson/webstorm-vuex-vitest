import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import {createStore} from "vuex";
import App from '../App.vue'

const store = createStore({
    state: {
        count: 0
    },
    mutations: {
        increment (state) {
            state.count++
        }
    }
})

describe('App', () => {
  it('mounts renders properly', () => {
    const wrapper = mount(App, {
        global: {
            plugins: [store]
        }
    })
    expect(wrapper.text()).toContain('You did it!')
  })
})
