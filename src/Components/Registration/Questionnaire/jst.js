<Button type="primary" onClick={() => this.previousButtonHandler()} inline size="medium" style={{ float: 'left', marginLeft: '4px' }}>
   previous
</Button>
<span className="currentPage">{this.state.currentPage}/6</span>
<Button type="primary" onClick={() => this.nextButtonHandler()} inline size="medium" style={{ float: 'right', marginRight: '4px' }}>
  Next
</Button>
