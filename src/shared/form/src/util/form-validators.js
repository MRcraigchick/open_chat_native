export default (() => {
  const required = 'Ce champ est obligatoire.';

  return {
    name: {
      required,
    },
    email: {
      required,
      pattern: {
        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        message: "L'adresse e-mail est invalide.",
      },
    },
    message: {
      required,
    },
    consent: {
      validate: (val) => Boolean(val) || 'Please check the box to continue.',
    },
  };
})();
