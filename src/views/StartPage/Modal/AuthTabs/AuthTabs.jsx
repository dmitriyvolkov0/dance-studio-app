import React from 'react';

import { Tabs, TabsHeader, TabsHeaderItem, TabsContent, TabsContentPage } from '@components/Tabs/Tabs';
import SignInTab from './SignInTab/SignInTab';
import SignUpTab from './SignUpTab/SignUpTab';

export default function AuthTabs({props}) {
    const [activeTab, setActiveTab] = React.useState(0);

    return (
    <Tabs>
        <TabsHeader activeTab={activeTab} setActiveTab={setActiveTab}>
            <TabsHeaderItem>Вход</TabsHeaderItem>
            <TabsHeaderItem>Регистрация</TabsHeaderItem>
        </TabsHeader>

        <TabsContent activeTab={activeTab}>
            <TabsContentPage>
                <SignInTab props={props}/>
            </TabsContentPage>         

            <TabsContentPage>
                <SignUpTab props={props}/>
            </TabsContentPage>            
        </TabsContent>
    </Tabs>
    )
}
