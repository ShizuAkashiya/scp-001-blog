import React from 'react';

const BlogPost = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-10">
      <article>
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Item #: SCP-001</h2>
        <h3 className="text-xl font-semibold text-gray-700 mb-2">Object Class: Unnecessary</h3>

        <section className="mb-8">
          <h4 className="text-2xl font-semibold text-gray-800 mb-3">Special Containment Procedures:</h4>
          <p className="text-gray-700 leading-relaxed">
            SCP-001 does not need to be contained. In the event of SCP-001 occurring, all personnel, including D-class, are to be honorably discharged, and may do what they wish with their remaining time. All sapient and non-aggressive SCPs are to be released. Any further SCPs which can be decommissioned are to be. All remaining Foundation sites are to be run by the AIAD systems. Specifically bred instances of SCP-514 are to be released globally.
          </p>
        </section>

        <section className="mb-8">
          <h4 className="text-2xl font-semibold text-gray-800 mb-3">Description:</h4>
          <p className="text-gray-700 leading-relaxed">
            SCP-001 refers to an event occurring shortly before the cessation of all life on Earth. Whilst SCP-001 has not yet taken place, it was discovered through various pieces of information gathered from extra-universal Foundations and other similar groups.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            SCP-001 is not the cause of the apocalyptic scenario, merely a pre-occurrence response to it. During an SCP-001 event, flowers are observed to spontaneously appear and bloom over ~90% of the viable land surface of the planet. The weather will clear, globally, with an ambient temperature recognized as comfortable by the majority of the populace. Air pollution will additionally clear.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            During an SCP-001 event, the global populace will become aware of the fate of the Earth, and of its inevitability. They will also experience heavily decreased levels of violence. SCP-001 will occur exactly 24 hours before the death of all life on the planet.
          </p>
        </section>
      </article>
    </main>
  );
};

export default BlogPost;
