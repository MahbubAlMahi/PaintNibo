export default function Button({ children, variant='primary', ...props }) {
  const cls = variant === 'primary' ? 'btn-primary' : 'btn-secondary'
  return <button className={cls} {...props}>{children}</button>
}
