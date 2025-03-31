import React from 'react';

import ErrorBoundaryRoutes from 'app/shared/error/error-boundary-routes';

import HolidayCalendar from './holiday-calendar';
import JobFrequency from './job-frequency';
import JobSchedule from './job-schedule';
import AgentGroup from './agent-group';
import Agent from './agent';
import JobDefinition from './job-definition';
import JobExecution from './job-execution';
import Region from './region';
import Country from './country';
/* jhipster-needle-add-route-import - JHipster will add routes here */

export default () => {
  return (
    <div>
      <ErrorBoundaryRoutes>
        {/* prettier-ignore */}
        <Route path="holiday-calendar/*" element={<HolidayCalendar />} />
        <Route path="job-frequency/*" element={<JobFrequency />} />
        <Route path="job-schedule/*" element={<JobSchedule />} />
        <Route path="agent-group/*" element={<AgentGroup />} />
        <Route path="agent/*" element={<Agent />} />
        <Route path="job-definition/*" element={<JobDefinition />} />
        <Route path="job-execution/*" element={<JobExecution />} />
        <Route path="region/*" element={<Region />} />
        <Route path="country/*" element={<Country />} />
        {/* jhipster-needle-add-route-path - JHipster will add routes here */}
      </ErrorBoundaryRoutes>
    </div>
  );
};
