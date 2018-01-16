import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import loopbackRestClient, {authClient} from 'aor-loopback';

import { UserList } from './users';

const App = () => (
    <Admin restClient={loopbackRestClient('/api/v1')} authClient={authClient('/api/v1/users/login')}>
        <Resource name="users" list={UserList} options={{label: "Users"}}/>
    </Admin>
);

export default App;