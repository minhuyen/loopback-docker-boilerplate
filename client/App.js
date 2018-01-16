import React from 'react';
import { Admin, Resource, Delete } from 'admin-on-rest';
import loopbackRestClient, {authClient} from 'aor-loopback';
import addUploadFeature from './rest/addUploadFeature';

import { UserList } from './users';

const uploadCapableClient = addUploadFeature(loopbackRestClient('/api/v1'));

const App = () => (
    <Admin restClient={uploadCapableClient} authClient={authClient('/api/v1/users/login')}>
        <Resource name="users" list={UserList} options={{label: "Users"}}/>
    </Admin>
);

export default App;