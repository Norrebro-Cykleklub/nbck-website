const windowSafe = typeof window !== 'undefined' ? window : null;

export default windowSafe as Nullable<Window & typeof globalThis>;
