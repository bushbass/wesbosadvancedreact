import Header from './Header';

export default function Page({ children, testProp }) {
  return (
    <>
      <Header></Header>
      <h2>page component</h2>
      {children}
      {testProp}
    </>
  );
}
