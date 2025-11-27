type RefreshHandler = () => Promise<string | null>

let accessToken: string | null = null
let refreshHandler: RefreshHandler | null = null

export const authSession = {
  getToken: () => accessToken,
  setToken: (token: string | null) => {
    accessToken = token
  },
  setRefreshHandler: (handler: RefreshHandler | null) => {
    refreshHandler = handler
  },
  async refreshToken() {
    if (refreshHandler) {
      const token = await refreshHandler()
      accessToken = token
      return token
    }
    return null
  },
}
