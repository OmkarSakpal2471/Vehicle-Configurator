using System;
using System.Collections.Generic;

namespace Vehicle_Configurator.DbRepos;

public partial class MfgMaster
{
    public int MfgId { get; set; }

    public string? MfgName { get; set; }

    public int? SegId { get; set; }

    public virtual ICollection<ModelMaster> ModelMasters { get; } = new List<ModelMaster>();

    public virtual SegmentMaster? Seg { get; set; }
}
