const useGetUserPermisssions = () => {
  // lógica para pegar as permissões das pessoas
  return ['canEdit', 'canSave']
}

const PermisssionGate = ({ children, permissions, user }) => {
  const userPermissions = user.permissions

  if (
    permissions
      .some(permission => {
        return userPermissions.includes(permission)
      })
  ) {
    return children
  }

  return null
}

export default PermisssionGate
