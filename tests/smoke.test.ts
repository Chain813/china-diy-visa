import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('Project scaffolding', () => {
  it('includes valid local world-50m.json TopoJSON asset with microstates', () => {
    const raw = readFileSync(resolve(__dirname, '../public/world-50m.json'), 'utf8');
    const json = JSON.parse(raw);
    expect(json.type).toBe('Topology');
    expect(json.objects).toHaveProperty('countries');

    const ids = new Set(
      (json.objects.countries.geometries as Array<{ id?: string | number }>).map((g) =>
        String(g.id ?? '').padStart(3, '0')
      )
    );
    expect(ids.has('702')).toBe(true); // Singapore
    expect(ids.has('480')).toBe(true); // Mauritius
    expect(ids.has('048')).toBe(true); // Bahrain
  });
});
