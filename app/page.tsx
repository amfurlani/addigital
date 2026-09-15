<section className="section">
  <div className="container">
    <SectionTitle
      eyebrow="EQUIPE"
      title="Pessoas por trás da estratégia jurídica."
      text="Profissionais com diferentes experiências e formações, atuando de maneira integrada."
    />

    <div className="team-grid">
      {lawyers.map(p => (
        <Link
          className="person-card"
          href={`/equipe/${p.slug}`}
          key={p.slug}
        >
          {p.image ? (
            <Image
              src={p.image}
              alt={p.name}
              width={120}
              height={120}
              className="team-photo"
            />
          ) : (
            <div className="avatar">
              {p.name
                .split(' ')
                .slice(0, 2)
                .map(x => x[0])
                .join('')}
            </div>
          )}

          <span>{p.role}</span>
          <h3>{p.name}</h3>
          <small>{p.oab}</small>

          <span className="text-link">
            Conheça o perfil <ArrowRight size={15} />
          </span>
        </Link>
      ))}
    </div>
  </div>
</section>
