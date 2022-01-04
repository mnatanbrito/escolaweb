const mockApps = []

export const getApps = () => mockApps

export const initializeApp = () => ({
  auth: function () {
    return {
      onAuthStateChanged: function () {},
    }
  },
  firestore: function () {},
})
