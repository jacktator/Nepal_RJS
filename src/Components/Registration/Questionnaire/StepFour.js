import enUs from 'antd-mobile/lib/date-picker/locale/en_US';

<div>
  <h2 style={{textAlign: 'center'}}>Stress and Productivity</h2>
  <br/><br/>

  <p>How often do you feel stressed at work?</p>
  <Picker
    data={this.state.stressArray}
    cols={1}
    value={[this.state.detail.currentBodyWeight]}
    onOk={v => this.onWeightPicker(v)}
    >
    <List.Item arrow="horizontal">Stress:</List.Item>
  </Picker>
  <br/><br/>

  <p>How productive do you feel each day?</p>
  <Picker
    data={this.state.productivityArray}
    local={enUs}
    cols={1}
    value={[this.state.detail.currentBodyWeight]}
    onOk={v => this.onWeightPicker(v)}
    >
    <List.Item arrow="horizontal">Productivity:</List.Item>
  </Picker>

</div>
