


module.exports = {
    toggleFavoriteSession: (parent, { id }, { dataSources }, info) => {
        return dataSources.sessionAPI.toggleFavoriteSession(id)
    },
    deleteSession: (parent, { id }, { dataSources }, info) => {
        return dataSources.sessionAPI.deleteSession(id)
    },
    addNewSession: (parent, { session }, { dataSources }, info) => {
        return dataSources.sessionAPI.addSession(session)
    },
}