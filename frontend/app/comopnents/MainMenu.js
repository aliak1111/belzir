'use client'

import React, {useState} from 'react';
import {AppstoreOutlined, MailOutlined, SettingOutlined, DownOutlined} from '@ant-design/icons';
import {Menu} from 'antd';
import { useRouter } from 'next/navigation';


const items = [
    {
        label: 'Home',
        key: '/',
    },
    {
        label: 'About Us',
        key: 'about',
    },
    {
        label: 'Courses',
        key: 'SubMenu',
        children: [
            {
                key: 'course',
                label: 'German Language Courses',
                type: 'group',
                children: [
                    {
                        label: 'Level A1',
                        key: 'a1',
                    },
                    {
                        label: 'Level A2',
                        key: 'a2',
                    },
                    {
                        label: 'Level B1',
                        key: 'b1',
                    },
                    {
                        label: 'Level B2',
                        key: 'b2',
                    },
                ],
            },
            {
                key: 'test',
                label: 'German Language Test',
                type: 'group',
                children: [
                    {
                        label: 'Level A1',
                        key: 'a1',
                    },
                    {
                        label: 'Level A2',
                        key: 'a2',
                    },
                    {
                        label: 'Level B1',
                        key: 'b1',
                    },
                    {
                        label: 'Level B2',
                        key: 'b2',
                    },
                ],
            },

        ],
    },
];

export const MainMenu = () => {
    const router = useRouter();


    const onClick = (e) => {
        router.push(e.key)
    };

    return (
        <Menu onClick={onClick} mode="horizontal" items={items} expandIcon/>
    )
}


