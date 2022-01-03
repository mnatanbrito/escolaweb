export default {
  apps: [],
  initializeApp: function () {
    return {
      auth: function () {
        return {
          onAuthStateChanged: function () {},
        }
      },
      firestore: function () {},
    }
  },
}
