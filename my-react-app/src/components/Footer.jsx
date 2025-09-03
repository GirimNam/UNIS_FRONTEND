export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#eee', padding: '16px', marginTop: '20px' }}>
      <small>© {new Date().getFullYear()} My Website</small>
    </footer>
  );
}