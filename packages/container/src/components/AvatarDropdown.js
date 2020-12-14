import React from 'react';
import { AvatarButton, Dropdown } from '@edx/paragon';

export default () => {
  return (
    <Dropdown>
      <Dropdown.Toggle  showLabel as={AvatarButton} src="https://source.unsplash.com/128x128/?dog,portrait">
        Adam
      </Dropdown.Toggle>

      <Dropdown.Menu alignRight>
        <Dropdown.Header className="text-uppercase">Switch Dashboard</Dropdown.Header>
        <Dropdown.Item href="#/action-2">Personal</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Enterprise</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">My Profile</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Account Settings</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Help</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#/action-3">Sign Out</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};
