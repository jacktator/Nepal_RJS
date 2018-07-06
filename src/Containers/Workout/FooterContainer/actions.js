
export function selectFooter (currentFooterTab: string){
  return {
    type: "SELECT_FOOTER",
    payload: currentFooterTab
  }
}
