---
to: "<%= locals.route ? `${route}/${name}/index.js` : `src/components/${name}/index.js` %>"
---

import <%=Name%> from './<%=Name%>';

export default <%=Name%>;