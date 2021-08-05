import PermisssionGate from "./PermissionGate";

function App({ permissions, user }) {
  return (
    <PermisssionGate
      permissions={[
        'canEdit',
        'canDelete',
        'canSave',
      ]}
      user={{ permissions: ['canEdit'] }}
    >
      <h1>Gerenciando permissões em aplicações React</h1>
    </PermisssionGate>
  );
}

export default App;
