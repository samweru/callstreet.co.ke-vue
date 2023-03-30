import { setActivePinia, createPinia } from 'pinia'
import { useLoginStore } from '../login.store'
import { describe, it, expect, beforeEach } from 'vitest'


describe('login:store', () => {
  beforeEach(() => {
    // creates a fresh pinia and make it active so it's automatically picked
    // up by any useStore() call without having to pass it to it:
    // `useStore(pinia)`
    setActivePinia(createPinia())
  })

  it('plain:auth', async() => {

    const loginStore = useLoginStore()
    loginStore.form = {

      email:"pitsolu@gmail.com",
      username:"pitsolu",
      password:"p@55w0rd"
    }

    const res = await loginStore.auth()
    expect(res.success).toBe(true)
    console.log(res)
  })

  it('auto:auth', async() => {

    const loginStore = useLoginStore()
    loginStore.email = "pitsolu@gmail.com"

    const res = await loginStore.autoAuth()
    expect(res.success).toBe(true)
    console.log(res)
  })
})
