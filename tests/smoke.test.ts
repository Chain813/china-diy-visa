import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { describe, expect, it } from 'vitest';

describe('Project scaffolding', () => {
  it('includes valid local world-110m.json TopoJSON asset', () => {
    const raw = readFileSync(resolve(__dirname, '../public/world-110m.json'), 'utf8');
    const json = JSON.parse(raw);
    expect(json.type).toBe('Topology');
    expect(json.objects).toHaveProperty('countries');
  });
});
