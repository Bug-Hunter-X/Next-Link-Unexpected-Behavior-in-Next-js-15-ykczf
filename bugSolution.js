```javascript
import { useRouter } from 'next/router';

function MyComponent() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/about');
  };

  return (
    <div>
      <a href='#' onClick={handleClick}>
        About Us
      </a>
    </div>
  );
}

export default MyComponent;
```