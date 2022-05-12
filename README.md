# Add spanish locale to moment js

```ts
import setLocaleTo_ES_WithData from 'moment_spanish_locale';
import moment from 'moment';

setLocaleTo_ES_WithData(moment)
```

or


```ts
import { localeData } from 'moment_spanish_locale';
import moment from 'moment';

moment.locale('es', localeData)
```