function ScheduleAppt() {
    return (
      <div
        style={{
          width: '100%',
          padding: '0 10px',
          boxSizing: 'border-box',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <iframe
          src="https://app.spectora.com/home-inspectors/my-inspection-company-2e3bfaedb0/schedule?iframe=1"
          style={{
            border: 0,
            height: '1100px',
            width: '100%',
            maxWidth: '900px'
          }}
          title="Schedule Appointment"
        />
      </div>
    );
  }
  
  export default ScheduleAppt;