import holidayCalendar from 'app/entities/holiday-calendar/holiday-calendar.reducer';
import jobFrequency from 'app/entities/job-frequency/job-frequency.reducer';
import jobSchedule from 'app/entities/job-schedule/job-schedule.reducer';
import agentGroup from 'app/entities/agent-group/agent-group.reducer';
import agent from 'app/entities/agent/agent.reducer';
import jobDefinition from 'app/entities/job-definition/job-definition.reducer';
import jobExecution from 'app/entities/job-execution/job-execution.reducer';
import region from 'app/entities/region/region.reducer';
import country from 'app/entities/country/country.reducer';
/* jhipster-needle-add-reducer-import - JHipster will add reducer here */

const entitiesReducers = {
  holidayCalendar,
  jobFrequency,
  jobSchedule,
  agentGroup,
  agent,
  jobDefinition,
  jobExecution,
  region,
  country,
  /* jhipster-needle-add-reducer-combine - JHipster will add reducer here */
};

export default entitiesReducers;
