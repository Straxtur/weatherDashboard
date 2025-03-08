import Layout from "./Layouts/Layout"

const App = () => {
  return (
    <Layout>
      <section className="col-span-1 rounded-3xl p-2.5 glass-card">option 1</section>

      <section className="col-span-1 rounded-3xl p-2.5 glass-card">option 2</section>

      <section className="md:col-span-2 rounded-3xl p-2.5 glass-card">option 3</section>
    </Layout>
  )
}

export default App
