import React from 'react';
import { Translate } from 'react-jhipster';

import MenuItem from 'app/shared/layout/menus/menu-item';

const EntitiesMenu = () => {
  return (
    <>
      {/* prettier-ignore */}
      <MenuItem icon="asterisk" to="/holiday-calendar">
        <Translate contentKey="global.menu.entities.holidayCalendar" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/job-frequency">
        <Translate contentKey="global.menu.entities.jobFrequency" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/job-schedule">
        <Translate contentKey="global.menu.entities.jobSchedule" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/agent-group">
        <Translate contentKey="global.menu.entities.agentGroup" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/agent">
        <Translate contentKey="global.menu.entities.agent" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/job-definition">
        <Translate contentKey="global.menu.entities.jobDefinition" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/job-execution">
        <Translate contentKey="global.menu.entities.jobExecution" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/region">
        <Translate contentKey="global.menu.entities.region" />
      </MenuItem>
      <MenuItem icon="asterisk" to="/country">
        <Translate contentKey="global.menu.entities.country" />
      </MenuItem>
      {/* jhipster-needle-add-entity-to-menu - JHipster will add entities to the menu here */}
    </>
  );
};

export default EntitiesMenu;
