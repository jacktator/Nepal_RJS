export const getCompany = () => {
  const full = window.location.host
  // window.location.host is subdomain.domain.com
  const parts = full.split('.')
  const sub = parts[0]

  const company = sub.includes("localhost:3000") ? "paypal" : sub;
  console.log('Welcome to AM Software. Company: ', company);

  return company
}
